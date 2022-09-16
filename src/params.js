import {Dimensions} from 'react-native';

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, //15% da  tela vai representar o cabeçalho - Proporção do painel superior da tela
  difficultLevel: 0.1, //O nível de dificuldade será 10% em cima da quantidade de campos que estão na tela

  //Método que irá calcular a quantidade de colunas
  getColumnsAmount() {
    const width = Dimensions.get('window').width; //Tamanho total da tela
    return Math.floor(width / this.blockSize);
  },

  //Método que irá calcular a quantidade de linhas
  getRowsAmount() {
    const totalHeight = Dimensions.get('window').height; //Largura total da tela
    const boardHeight = totalHeight * (1 - this.headerRatio); //Altura do tabuleiro do jogo

    return Math.floor(boardHeight / this.blockSize);
  },
};

export default params;
