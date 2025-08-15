import { Button, Container, Typography, Alert, MenuItem } from "@mui/material";
import * as S from "./style";
import { useState } from "react";
import { theme } from "../../styles/theme";
import { api } from "../../services/api";

export const Hero: React.FC = () => {
  const [taxa, setTaxa] = useState("");
  const [tempo, setTempo] = useState("");
  const [tipoTempo, setTipoTempo] = useState("year");
  const [resultado, setResultado] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResultado(null);
    setErro(null);

    const data = {
      equivalentRate: Number(taxa),
      periodsPerMonth: Number(tempo),
      typeofTime: tipoTempo,
    };

    try {
      const response = await api.post("/rates/convert/equivalent-to-nominal", data);
      setResultado(`${response.data.result}%`);
    } catch (err) {
      setErro("Falha ao calcular a taxa. Verifique os dados e tente novamente.");
      console.error(err);
    }
  };

  return (
    <S.hero>
      {/* Wrapper geral para anúncios + container */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
        }}
      >

        {/* Container principal */}
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <S.formConverter onSubmit={handleSubmit}>
            <Typography color={theme.palette.secondary.main} variant="h6" gutterBottom>
              Convertor de Taxa equivalente para Taxa Nominal
            </Typography>

            <S.labelConverter htmlFor="taxa">Taxa</S.labelConverter>
            <S.inputConverter
              type="number"
              placeholder="taxa"
              id="taxa"
              value={taxa}
              onChange={(e) => setTaxa(e.target.value)}
            />

            <S.labelConverter htmlFor="tempo">Tempo</S.labelConverter>
            <S.inputConverter
              type="number"
              placeholder="tempo"
              id="tempo"
              value={tempo}
              onChange={(e) => setTempo(e.target.value)}
            />

            <S.labelConverter htmlFor="tipo-tempo">Período</S.labelConverter>
            <S.selectConverter
              id="tipo-tempo"
              value={tipoTempo}
              onChange={(e) => setTipoTempo(e.target.value as string)}
              variant="standard"
            >
              <MenuItem value="year">Ano</MenuItem>
              <MenuItem value="month">Mês</MenuItem>
              <MenuItem value="day">Dia</MenuItem>
            </S.selectConverter>

            <Button type="submit" variant="contained" color="primary" sx={{ alignSelf: "center" }}>
              Enviar
            </Button>

            {resultado && (
              <Alert severity="success" sx={{ marginTop: 2, textAlign: "center" }}>
                Taxa Nominal Calculada: {resultado}
              </Alert>
            )}
            {erro && (
              <Alert severity="error" sx={{ marginTop: 2, textAlign: "center" }}>
                {erro}
              </Alert>
            )}
          </S.formConverter>
        </Container>
      </div>
    </S.hero>
  );
};
