import { useDispatch, useSelector } from "react-redux"
import FiltersForm from "../formulaires/filtersForm"
import './statistiques.css'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useState } from "react";
import { useEffect } from "react";
import api from "../axios";
import filterData from "./filterData.js";

export default function Statistiques() {
  const [ColisInfo, setColisInfo] = useState([])
  const filters = useSelector(state => state.filters)
  
  const fetchUserData = async() =>{
    try {
      const query = {
        dateTag: '1970-01-01 00:00:00',
        ip: '192.168.8.119',
        
      };
  
      const response = await api.post("/command", query);
      const filterDataArray = filterData(response.data, filters)
      if(ColisInfo.length == 0){
        setColisInfo(response.data)
      }else if(filterDataArray.length !== 0){
        setColisInfo(filterDataArray)
      }
      
    }catch(err){
      console.error('API request failed :',err)
    }
  }
  console.log(ColisInfo[100])
  
  useEffect(()=> {
    fetchUserData()
  },[filters])
  const totalAmount = ColisInfo.reduce((sum, item) => {
    return sum + (item.amountCrbt || 0);
}, 0);
  const categories = [
    '2ème présentation',
    'En transit',
    'Envoi livré',
    'Déposé',
    'A récupèrer au guichet',
    'Envoi retourné',
    'En cours de livraison'
  ];
  //Details de Status
  const countData = categories.map(name => {
    const count = ColisInfo.filter(item => item.libelle === name).length;
    return { name, value: count };
  });
  const COLORS = [
    '#3e91ea', // Soft blue
    '#ff1c1c', // Dusty red
    '#356a33', // Muted green 
    '#EDC948', // Golden yellow
    '#F28E2B', // Warm orange 
    '#B07AA1' , // Soft purple
    '#1b7bc9', // Teal
  ];
    //dtatus de paiement
    const payeCount = ColisInfo.filter(item => item.datePaiement !== null).length;
    const impayeCount = ColisInfo.filter(item => item.datePaiement == null).length;
    const dataPaiement = [
      { name: 'Payé', value: payeCount },
      { name: 'Impayé', value: impayeCount },
    ];
    //status des envois
    const livréCount = ColisInfo.filter(item => item.libelle === 'Envoi livré').length;
    const retournéCount = ColisInfo.filter(item => item.libelle === 'Envoi retourné').length;
    const enCoursCount = ColisInfo.filter(item => 
      item.libelle !== 'Envoi livré' && 
      item.libelle !== 'Envoi retourné'
    ).length;
    const data = [
      { name: 'En cours', value: enCoursCount },
      { name: 'Envoi retourné', value: retournéCount },
      { name: 'Envoi livré', value: livréCount },
    ];


  return (
    <div className="statistiques_container">
      <h3>Mes Statistiques</h3>
      <FiltersForm/>
      <h3>{ColisInfo.length} Colis / {totalAmount} MAD</h3>
      <div className="charts_container">
        <div className="charts_items">
          <h3>Detail des status</h3>
          {ColisInfo.length === 0 ? 
          <><h5>No data to diplay</h5></> 
          : <ResponsiveContainer width="100%" height={400}>
          <PieChart>
          <Tooltip 
            formatter={(value, name, props) => 
            {
                const percent = props.payload?.percent * 100 || 0;
                return [`${(percent * 100).toFixed(2)}% / ${value} `]
            }
            } 
          />
            <Pie
              data={countData}
              cx="50%"
              cy="50%"
              labelLine={false}
              cornerRadius = {5}
              paddingAngle={1}
              innerRadius={55}
              outerRadius={110}
              fill="#8884d8"
              dataKey="value"
              label={({ percent }) => ` ${(percent * 100).toFixed(2)}% `}
              minAngle={9}
            >
              {countData.map((entry , index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>}
        </div>
        <div className="charts_items">
          <h3>Statut des Paiements</h3>
          {ColisInfo.length === 0 
          ?<><h4>No data to display</h4></>
          :<ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={dataPaiement}
                cx="50%"
                cy="50%"
                labelLine={false}
                cornerRadius = {5}
                startAngle={205}
                endAngle={-25}
                label={({ name, percent }) => ` ${(percent * 100).toFixed(2)}%`}
                innerRadius={75}
                outerRadius={110}
                fill="#8884d8"
                dataKey="value"
                minAngle={1}
              >
                {dataPaiement.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value, name, props) => [
                  `${(props.payload.percent * 100).toFixed(2)}% / ${value}`
                ]} 
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          }
        </div>
        <div className="charts_items">
          <h3>Statut des envois</h3>
          {ColisInfo.length === 0 
          ?<><h4>No data to display</h4></>
          :<ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              paddingAngle={1}
              cornerRadius = {5}
              innerRadius={55}
              outerRadius={110}
              dataKey="value"
              label={({ percent }) => `${(percent * 100).toFixed(2)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
          }
        </div>
        <div className="charts_items">
          <h3>Line chart</h3>
          {ColisInfo.length === 0 ?
          <><h4>No data to display</h4></> : <>data fetched</>}
        </div>
        <div className="charts_items">
          <h3>Map chart</h3>
          {ColisInfo.length === 0 ?
          <><h4>No data to display</h4></> : <>data fetched</>}
        </div>
      </div>
    </div>
  )
}
