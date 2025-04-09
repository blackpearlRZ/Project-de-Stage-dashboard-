import { useEffect, useState } from 'react';
import keycloak from './Keycloak';
import './App.css'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"; 
import Layout from './components/Layout/layout';

const api = axios.create({
  baseURL: 'https://dashecom.barid.ma/backend/api',
});

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()

  function handlelogout(){
    try {
      keycloak.logout({redirectUri : window.location.origin})
      sessionStorage.removeItem('keycloakInitialized');
      setAuthenticated(false);
      setLoading(true)
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  const fetchUserData = async() =>{
    try{
      api.interceptors.request.use(config =>{
        config.headers.Authorization = `Bearer ${keycloak.token}`
        return config
      })
      const response = await api.post("/command", {
        dateTag : '1970-01-01 00:00:00',
        ip : '192.168.8.119'
      })
      const flattenedArray = [];
      for (const key in response) {
        if (Array.isArray(response[key])) {
          flattenedArray.push(...response[key]);
        }
} 
      dispatch({
        type : "SET_USER_DATA",
        payload : flattenedArray
      })
    }catch(err){
      console.error('API request failed :',err)
    }
  }

  useEffect(() => {
    let initialized = false;
    
    const initKeycloak = async () => {
      if (initialized || keycloak.authenticated) return;
      initialized = true;
      
      try {
        const authenticated = await keycloak.init({
          onLoad: 'login-required',
          checkLoginIframe: false
        });
        if (authenticated) {
          //console.log('✅ Authenticated:', keycloak.tokenParsed);
          sessionStorage.setItem('keycloakInitialized', 'true');
          await fetchUserData()
        } else {
          console.log('❌ Not authenticated');
        }
      } catch (error) {
        console.error('❌ Keycloak initialization failed:', error);
      } finally {
        setLoading(false);
      }
      dispatch({
        type : 'SET_AUTH_INFO' ,
        payload : keycloak.tokenParsed
      })
    };

    if (!sessionStorage.getItem('keycloakInitialized')) {
      initKeycloak();
    } else {
      setLoading(false);
    }

    if(loading){
      initKeycloak()
    }
    // Cleanup function
    return () => {
      initialized = true;
    };
  }, []);
  
  return loading ? <p>Redirecting to login...</p> :
   <>
   <Layout handlelogout={handlelogout}/>
  </>;
};

export default Login;