class Ads extends React.Component
{
  render()
  {
    return <div>
              <h2>Componentes curriculares</h2>
              <table>
                <tr>
                  <th>DISCIPLINA</th>
                  <th>CARGA</th>
                  <th>PERIODO</th>
                </tr>
                <tr>
                  <td>Sistemas Operacionais</td>
                  <td>66.7</td>
                  <td>Noturno</td>
                </tr>
                <tr>
                  <td>Inglês</td>
                  <td>33.3</td>
                  <td>Noturno</td>
                </tr>
                <tr>
                  <td>Laboratório de Estruturas de Dados e Programação</td>
                  <td>33.3</td>
                  <td>Noturno</td>
                </tr>
                <tr>
                  <td>Introdução a Banco de Dados</td>
                  <td>66.7</td>
                  <td>Noturno</td>
                </tr>
              </table>
           </div>;
  }
}
ReactDOM.render(<Ads />, document.getElementById('ads'));