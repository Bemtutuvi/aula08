import { useEffect, useState } from "react";
export default function Registrar() {
  const [usuarios, setUsuario]= useState([]);
  const [gmail, setGmail]= useState([]);
  useEffect(()=>{
    const buscarUsuario=async()=>{
      try{
        const resposta= await fetch("http://localhost:3000/usuarios");
        const dados= await resposta.json();
        setUsuario(dados);
        setGmail(dados);
      }catch{
        alert('Erro!');
      }
    }
    buscarUsuario();
  },[])
  return (
       
  );
}