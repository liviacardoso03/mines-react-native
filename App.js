import React, {Component} from 'react';
import params from './src/params';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import MineField from './src/components/MineField';
import {createMineBoard} from './src/functions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMineBoard(rows, cols, this.minesAmount()),
    };
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines</Text>
        <Text style={styles.welcome}>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <SafeAreaView style={styles.board}>
          <MineField board={this.state.board} />
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});
