
import React, { useState} from "react";
import { Grid, Paper, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { bodyActions } from '../../redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 30,
    paddingLeft: 80,
  },
  empty: {
    padding: theme.spacing(1),
    textAlign: 'center'
  },
  airport: {
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: '#5882FA'
  },
  cloud: {
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: '#bfbfbf'
  },
  danger: {
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: '#ff9900'
  },
}));

const Body = (props) => {
  const [matrix, generatedAirports, generatedClouds, days, daysFirst] = useSelector(({body}) => 
                                          [body.matrix, body.generatedAirports, body.generatedClouds, body.days, body.daysFirst]);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [airports, setAirports] = useState(3);
  const [clouds, setClouds] = useState(4);
  const [size, setSize] = useState(10);

  console.log(generatedAirports);
  function FormColumn(props) {
    return (
      <React.Fragment>
        {props.rows && props.rows.map((column, index) => (
          <Grid key={`column-${index}`} item xs={1}>
            <Paper className={column === 'E' ? classes.empty : column === 'A' ? classes.airport : column === 'C' ? classes.cloud : classes.danger}>{column}</Paper>
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  const generateMatrix = () => {
    if (airports > 2 && clouds > 3 && size > 9)
      dispatch(bodyActions.generate({ airports, clouds, size }));
    else
      alert('Digite no mínimo 3 aeroportos, 4 nuvens e terreno de tamanho 10');
  }

  const calculateDays = () => {
    dispatch(bodyActions.calculateDays({ matrix, generatedAirports, generatedClouds, size }));
  }

  return (
    <div className={classes.root}>
      <div className="App-form">
        <label className="App-label">Aeroportos:</label>
        <input
          className="App-input"
          id="airports"
          name="airports"
          type="number"
          variant="outlined"
          placeholder="Aeroportos"
          value={airports}
          onChange={e => setAirports(e.target.value)} 
        />
        <label className="App-label">Nuvens:</label>
        <input
          className="App-input"
          id="clouds"
          name="clouds"
          type="number"
          variant="outlined"
          placeholder="Nuvens"
          value={clouds}
          onChange={e => setClouds(e.target.value)} 
        />
        <label className="App-label">Terreno:</label>
        <input
          className="App-input"
          id="size"
          name="size"
          type="number"
          variant="outlined"
          placeholder="Tamanho Matriz"
          value={size}
          onChange={e => setSize(e.target.value)} 
        />
        {(!generatedAirports || generatedAirports.length < 1) && <button className="App-button" onClick={() => generateMatrix()}>Gerar</button>}
        {generatedAirports && generatedAirports.length > 0 && <button className={"App-button"} onClick={() => calculateDays()}>Calcular</button>}
      </div>
      <Grid container spacing={1}>
      {matrix && matrix.map((row, index) => (
        <Grid key={`row-${index}`} container item xs={12} spacing={3}>
          <FormColumn rows={row}/>
        </Grid>
      ))}
      </Grid>
      <div className="App-form-footer">
        <label className="App-label">Dias até o primeiro aeroporto ser atingido: {daysFirst}</label>
        <label className="App-label">Dias até todos os aeroportos serem atingidos: {days}</label>
      </div>
      <label className="App-legend">Legenda: </label>
      <div className="App-form">
        <Paper className={classes.empty}>E</Paper>
        <label className="App-label">Espaço vazio</label>
        <Paper className={classes.airport}>A</Paper>
        <label className="App-label">Aeroporto</label>
        <Paper className={classes.cloud}>C</Paper>
        <label className="App-label">Nuvem</label>
        <Paper className={classes.danger}>D</Paper>
        <label className="App-label">Aeroporto fechado</label>
      </div>
    </div>
  );
}

export default Body;