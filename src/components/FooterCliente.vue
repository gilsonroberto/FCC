<template>
  <footer>
    <div class="container-footer">
      <div class="row-footer">
        <div class="footer-col">
          <ul>
              <li><a href="#"> Institucional </a></li>
              <li><a href=""> Mapa do Site </a></li>
              <li><a href=""> Youtube </a></li>
              <li><a href=""> Contato </a></li>
          </ul>
        </div>
        <div class="footer-col">
          <ul>
              <li><a href="#">Pesquisa e Educação</a></li>
              <li><a href="#">Publicações</a></li>
              <li><a href="#">Educ@</a></li>
              <li><a href="#">Cursos e Seminários</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <ul>
              <li><a href="#">Prêmios</a></li>
              <li><a href="#">Biblioteca</a></li>
              <li><a href="#">Notícias</a></li>
              <li><a href="#">Concursos</a></li>
          </ul>
        </div>
        <div class="footer-col">
            <h4>Inscreva-se</h4>
            <div class="form-sub">
                <form>
                    <input type="email" placeholder="Digite o seu e-mail" required>
                    <button>Inscrever</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
footer{
    background-color: #a90637;
    padding: 50px 0;
}
.container-footer{
    max-width: 1400px;
    padding: 0;
    margin: auto;
}
.row-footer{
    display: flex;
    flex-wrap: wrap;
}

.footer-col{
    width: 25%;
    padding: 0 15px;
}
.footer-col h4{
    font-size: 22px;
    color: #fff;
    margin-bottom: 20px;
    font-weight: 500;
    position: relative;
    text-transform: uppercase;
}
.footer-col ul{
    list-style: none;
}
.footer-col ul li{
    margin: 10px 0;
}
.footer-col ul li a{
    font-size: 16px;
    text-transform: capitalize;
    color: #fff;
    text-decoration: none;
    font-weight: 300;
    display: block;
    transition: all 0.3s ease;
}
.footer-col ul li a:hover{
    color: #cecdcd;
    padding-left: 10px;
}
.footer-col .medias-socias{
    margin-top: 30px;
}
.footer-col .medias-socias a{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    margin: 0 10px 10px 0;
    text-decoration: none;
    border-radius: 50%;
    color: #fff;
    border: 1px solid #fff;
    transition: all 0.5s ease;
}
.footer-col .medias-socias a i{
    font-size: 20px;
}

.footer-col .medias-socias a:hover{
    color: #a90637;
    background-color: #fff;
}
.footer-col .form-sub input{
    width: 100%;
    padding: 10px;
    font-size: 15px;
    outline: none;
    border: 1px solid #fff;
    color: #fff;
    background-color: #a90637;
}
.footer-col .form-sub input::placeholder{
    color: #fff;
}
.footer-col .form-sub button{
    width: 100%;
    margin-top: 10px;
    padding: 10px; 
    font-size: 17px;
    outline: none;
    border: none;
    cursor: pointer;
    color: #000;
    border-radius: 3px;
    font-weight: bold;
    background-color: #fff;        
}

@media (max-width: 800px) {
    .footer-col{
        width: 50%;
        margin-bottom: 30px;
    }
}
@media (max-width:600px) {
    .footer-col{
        width: 100%;
    }
}
</style>