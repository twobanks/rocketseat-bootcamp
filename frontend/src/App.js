import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css'

import Header from './components/Header';

/* 
      3 Conceitos React
      Componentes, Propriedades,
      Estado e Imutabilidade
      useState retorna um array com 2 posições
      1 - Variável com o seu valor inicial
      2 - Função para atualizarmos esse valor

      useEffect dispara uma função sempre que o componente for exibido na tela
*/

function App() {
      const [projects, setProjects] = useState([]);
      useEffect(() => {
            api.get('projects').then(response => {
                  setProjects(response.data);
            });
      }, []);
      async function handleAddProject() {
            /* setProjects([...projects, 'React Native']); */
            const response = await api.post('projects', {
                  title: `Novo projeto ${Date.now()}`,
                  owner: 'twobanks'
            });
            const project = response.data;

            setProjects([...projects, project]);
      }
      return (
            <>
                  <Header title="Home" />
                  <ul>
                        {projects.map(project => <li key={project.id}>{project.title}</li>)}
                  </ul>
                  <button type="button" onClick={handleAddProject}> Adicionar Projeto </button>
            </>
      )
}
export default App;