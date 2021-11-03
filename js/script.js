class JogoDaVelha {
  constructor(jogoDaVelha){
    this.jogoDaVelha = document.querySelectorAll(jogoDaVelha);
    this.jogadorX = document.querySelector('.jogadorX span');
    this.jogadorO = document.querySelector('.jogadorO span');
    this.indicandoVezJogada = document.querySelector('.jogadaDaVez span');
    
    // Verificando quem vai fazer a jogada, X ou O
    this.vezJogada = 1;
    // Adiciona as classes para pegar o item em que a jogada foi feita
    this.classesAdiciona = null;
    // Adiciona o numero da jogada 
    this.arrayJogadorO = [];
    this.arrayJogadorX = [];
    // Conta os pontos de cada jogador
    this.vitoriaJogadorX = 0;
    this.vitoriaJogadorO = 0;
  }

  addEvents(){
    this.jogoDaVelha.forEach(item => {
        item.addEventListener('click', this.jogadaFeita)
    })
    // Corrige erro de só passar nome da classe ao segundo clique
    if(!this.classesAdiciona){
      this.jogoDaVelha.forEach(item => {
        item.addEventListener('mousemove', this.adicionandoClassesNosBlocos)
      })
    }
  }

  bindEvents(){
    this.jogadaFeita = this.jogadaFeita.bind(this);
    this.adicionandoClassesNosBlocos = this.adicionandoClassesNosBlocos.bind(this);
  }

  jogadaFeita(event){
    if(this.vezJogada){
      // Verificando se o item clicado já está preenchido
      if(event.currentTarget.innerText === 'O'){
        return
      }
      // Pegando o número do bloco clicado
      this.jogadaAtual = +event.currentTarget.className.slice(-1); 
      // Ativando meu método com o número do bloco clicado
      this.marcandoJogada(this.jogadaAtual);
      this.arrayJogadorX.push(this.jogadaAtual);
      this.arrayJogadorX.sort();
      this.possibilidadesJogadasDoX();
      this.verificaSeVenceuJogadorXVenceu();
      this.vezJogada = 0;
      this.indicandoVezJogada.innerText = 'O'
    }else {
      if(event.currentTarget.innerText === 'X'){
        return
      }
      this.jogadaAtual = +event.currentTarget.className.slice(-1);
      this.marcandoJogada(this.jogadaAtual);
      this.arrayJogadorO.push(this.jogadaAtual);
      this.arrayJogadorO.sort();
      this.possibilidadesJogadasDoO();
      this.verificaSeVenceuJogadorOVenceu();
      this.vezJogada = 1;
      this.indicandoVezJogada.innerText = 'X'
    }
  }

  adicionandoClassesNosBlocos(){
    // Adiciona classe a todos os blocos
    let cont = 1;
    this.jogoDaVelha.forEach(item => {
      item.classList.add(`bloco${cont}`);
      cont++
    });
    // remove evento que adiciona as classes
    this.classesAdiciona = true;
    this.jogoDaVelha.forEach(item => {
      item.removeEventListener('mousemove', this.adicionandoClassesNosBlocos)
    })
  }

  possibilidadesDeVitorias(){
    this.arrayPossibilidadesVitoria = [
      [1,2,3], [4,5,6], [7,8,9],
      [1,4,7], [2,5,8], [3,6,9],
      [1,5,9], [3,5,7]
    ]
  }

  possibilidadesJogadasDoX(){
    this.arrayXPossibilidade1 = [this.arrayJogadorX[0], this.arrayJogadorX[1], this.arrayJogadorX[2]];
    this.arrayXPossibilidade2 = [this.arrayJogadorX[0], this.arrayJogadorX[2], this.arrayJogadorX[4]];
    this.arrayXPossibilidade3 = [this.arrayJogadorX[0], this.arrayJogadorX[3], this.arrayJogadorX[4]];
    this.arrayXPossibilidade4 = [this.arrayJogadorX[0], this.arrayJogadorX[2], this.arrayJogadorX[3]];
    this.arrayXPossibilidade5 = [this.arrayJogadorX[0], this.arrayJogadorX[1], this.arrayJogadorX[4]];
    this.arrayXPossibilidade6 = [this.arrayJogadorX[1], this.arrayJogadorX[2], this.arrayJogadorX[3]];
    this.arrayXPossibilidade7 = [this.arrayJogadorX[1], this.arrayJogadorX[3], this.arrayJogadorX[4]];
    this.arrayXPossibilidade8 = [this.arrayJogadorX[1], this.arrayJogadorX[2], this.arrayJogadorX[4]];
    this.arrayXPossibilidade9 = [this.arrayJogadorX[2], this.arrayJogadorX[3], this.arrayJogadorX[4]];
  } 

  possibilidadesJogadasDoO(){
    this.arrayOPossibilidade1 = [this.arrayJogadorO[0], this.arrayJogadorO[1], this.arrayJogadorO[2]];
    this.arrayOPossibilidade2 = [this.arrayJogadorO[0], this.arrayJogadorO[2], this.arrayJogadorO[4]];
    this.arrayOPossibilidade3 = [this.arrayJogadorO[0], this.arrayJogadorO[3], this.arrayJogadorO[4]];
    this.arrayOPossibilidade4 = [this.arrayJogadorO[0], this.arrayJogadorO[2], this.arrayJogadorO[3]];
    this.arrayOPossibilidade5 = [this.arrayJogadorO[0], this.arrayJogadorO[1], this.arrayJogadorO[4]];
    this.arrayOPossibilidade6 = [this.arrayJogadorO[1], this.arrayJogadorO[2], this.arrayJogadorO[3]];
    this.arrayOPossibilidade7 = [this.arrayJogadorO[1], this.arrayJogadorO[3], this.arrayJogadorO[4]];
    this.arrayOPossibilidade8 = [this.arrayJogadorO[1], this.arrayJogadorO[2], this.arrayJogadorO[4]];
    this.arrayOPossibilidade9 = [this.arrayJogadorO[2], this.arrayJogadorO[3], this.arrayJogadorO[4]];
  } 

  marcandoJogada(index){
    // Quando a vez jogada for true então é a vez do jogador X;
    if(this.vezJogada){
      if(this.jogoDaVelha[index - 1].innerText === ''){
        this.jogoDaVelha[index - 1].innerText = 'X';
      }
    }else {
      if(this.jogoDaVelha[index - 1].innerText === ''){        
        this.jogoDaVelha[index - 1].innerText = 'O';
      }
    }
  }

  verificaSeVenceuJogadorXVenceu(){
    // Verifica se as jogadas dos usuarios estão dentro das possibilidades de vitoria.
    this.arrayPossibilidadesVitoria.forEach(item => {
      if(item.every(array => this.arrayXPossibilidade1.includes(array)))
        if(confirm('O jogador X venceu!')){          
          this.resetaX();
          return
        }
      if(item.every(array => this.arrayXPossibilidade2.includes(array))) 
        if(confirm('O jogador X venceu!')){          
          this.resetaX();
          return
        }
      if(item.every(array => this.arrayXPossibilidade3.includes(array))) 
        if(confirm('O jogador X venceu!')){          
          this.resetaX();
          return
        }
      if(item.every(array => this.arrayXPossibilidade4.includes(array))) 
        if(confirm('O jogador X venceu!')){          
          this.resetaX();
          return
        }
      if(item.every(array => this.arrayXPossibilidade5.includes(array))) 
        if(confirm('O jogador X venceu!')){          
          this.resetaX();
          return
        }
      if(item.every(array => this.arrayXPossibilidade6.includes(array))) 
        if(confirm('O jogador X venceu!')){          
          this.resetaX();
          return
        }
      if(item.every(array => this.arrayXPossibilidade7.includes(array))) 
        if(confirm('O jogador X venceu!')){          
          this.resetaX();
          return
        }
      if(item.every(array => this.arrayXPossibilidade8.includes(array))) 
        if(confirm('O jogador X venceu!')){          
          this.resetaX();
          return
        }
      if(item.every(array => this.arrayXPossibilidade9.includes(array))) 
        if(confirm('O jogador X venceu!')){          
          this.resetaX();
          return
        }
    });
  }

  verificaSeVenceuJogadorOVenceu(){
    this.arrayPossibilidadesVitoria.forEach(item => {
      if(item.every(array => this.arrayOPossibilidade1.includes(array)))
        if(confirm('O jogador O venceu!')) {
          this.resetaO();
          console.log(this.arrayJogadorO);
          return
        }
      if(item.every(array => this.arrayOPossibilidade2.includes(array))) 
        if(confirm('O jogador O venceu!')) {
          this.resetaO();
          console.log(this.arrayJogadorO);
          return
        }
      if(item.every(array => this.arrayOPossibilidade3.includes(array))) 
        if(confirm('O jogador O venceu!')) {
          this.resetaO();
          console.log(this.arrayJogadorO);
          return
        }
      if(item.every(array => this.arrayOPossibilidade4.includes(array))) 
        if(confirm('O jogador O venceu!')) {
          this.resetaO();
          console.log(this.arrayJogadorO);
          return
        }
      if(item.every(array => this.arrayOPossibilidade5.includes(array))) 
        if(confirm('O jogador O venceu!')) {
          this.resetaO();
          console.log(this.arrayJogadorO);
          return
        }
      if(item.every(array => this.arrayOPossibilidade6.includes(array))) 
        if(confirm('O jogador O venceu!')) {
          this.resetaO();
          console.log(this.arrayJogadorO);
          return
        }
      if(item.every(array => this.arrayOPossibilidade7.includes(array))) 
        if(confirm('O jogador O venceu!')) {
          this.resetaO();
          console.log(this.arrayJogadorO);
          return
        }
      if(item.every(array => this.arrayOPossibilidade8.includes(array))) 
        if(confirm('O jogador O venceu!')) {
          this.resetaO();
          console.log(this.arrayJogadorO);
          return
        }
      if(item.every(array => this.arrayOPossibilidade9.includes(array))) 
        if(confirm('O jogador O venceu!')) {
          this.resetaO();
          console.log(this.arrayJogadorO);
          return
        }
    });
  }

  resetaX(){
    this.vezJogada = 1;
    this.vitoriaJogadorX += 1;     
    this.jogadaAtual = null;
    this.resetaArrayJogada();
    this.limpaOInnerTextDosItens();
    this.adicionaPontoAoJogadorX();
    console.log(this.vezJogada);
  }

  resetaO(){
    this.vezJogada = 1;
    this.vitoriaJogadorO += 1;
    this.jogadaAtual = null;
    this.resetaArrayJogada();
    this.limpaOInnerTextDosItens();
    this.adicionaPontoAoJogadorO();
    console.log(this.vezJogada);
  }

  resetaArrayJogada(){
    this.arrayJogadorX.splice(0, 5);
    this.arrayJogadorO.splice(0, 5);
  }

  limpaOInnerTextDosItens(){  
    this.jogoDaVelha.forEach(item => item.innerText = '')  
  }

  adicionaPontoAoJogadorX(){
    this.jogadorX.innerText = `${this.vitoriaJogadorX}`;
  }

  adicionaPontoAoJogadorO(){
    this.jogadorO.innerText = `${this.vitoriaJogadorO}`;
  }

  init(){
    this.possibilidadesDeVitorias();
    this.bindEvents();
    this.addEvents();
    return this;
  }
}

const jogo = new JogoDaVelha('.jogo__da-velha div').init();
