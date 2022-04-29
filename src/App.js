import logo from './kepler.png';
import grupo from './grupo.jpg';
import xiaoting from './Xiaoting.jpg';
import yeseo from './Yeseo.jpg';
import hikaru from './Hikaru.jpg';
import mashiro from './Mashiro.jpg';
import chaehyun from './Chaehyun.jpg';
import yeongeun from './youngeun.png';
import bahilda from './Bahilda.jpg';
import dayeon from './Dayeon.jpg';
import yujin from './yujin.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="cabecalho">
        <div className="imagem">
          <img src={logo}/>
        </div>
        <nav className="menu">
          <a href="#">Historia</a>
          <a href="#">Integrantes</a>
        </nav>
      </header>
      <article>
        <h1>Historia</h1>
        <div className="conteudo">
          <div className="foto">
            <img src={grupo}/>
          </div>
          <div className="texto">
            <p>Kep1er é um grupo formado pelo reality show "Girls Planet 999", com a premissa de juntar China, Coreia do Sul e Japão para formar um grupo feminino global. O grupo contém nove integrantes sendo elas: Xiaoting, Hikaru, Mashiro, Yeseo, Dayeon, Chaehyun, Bahiyyih, Yujin e Youngeun.</p>
            <br/>
            <p>O grupo estreou com o mini album "First Impact" em janeiro de 2022, contendo músicas de sucesso como: Wadada, MVSK, Shine, Another Dream e O.O.O. Atualmente se encontra participando de outro reality show, o "Queendom".</p>
          </div>
        </div>
      </article>
      <div className="integrantes">
        <h1>Integrantes</h1>
        <div className="secao_um">
          <div className="integrante">
            <div className="padrao">
              <img src={xiaoting}/>
              <p>Shen Xiaoting</p>
            </div>
            <div className="padrao">
              <img src={yeseo}/>
              <p>Kang Yeseo</p>
            </div>
            <div className="padrao">
              <img src={hikaru}/>
              <p>Ezaki Hikaru</p>
            </div>
          </div>
        </div>
        <div className="secao_um">
          <div className="integrante">
            <div className="padrao">
              <img src={mashiro}/>
              <p>Sakamoto Mashiro</p>
            </div>
            <div className="padrao">
              <img src={chaehyun}/>
              <p>Kim Chaehyun</p>
            </div>
            <div className="padrao">
              <img src={yeongeun}/>
              <p>Seo Youngeun</p>
            </div>
          </div>
        </div>
        <div className="secao_um">
          <div className="integrante">
            <div className="padrao">
              <img src={bahilda}/>
              <p>Huening Bahiyyih</p>
            </div>
            <div className="padrao">
              <img src={dayeon}/>
              <p>Kim Dayeon</p>
            </div>
            <div className="padrao">
              <img src={yujin}/>
              <p>Choi Yujin</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
