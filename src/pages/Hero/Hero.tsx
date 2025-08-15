  import { Button, Container, Typography, Alert, MenuItem, CircularProgress } from "@mui/material";
  import * as S from "./style";
  import { useState } from "react";
  import { theme } from "../../styles/theme";
  import { api } from "../../services/api";
  import { GoogleAd } from "../../components/GoogleAd/GoogleAd";

  export const Hero: React.FC = () => {
    const [taxa, setTaxa] = useState("");
    const [tempo, setTempo] = useState("");
    const [tipoTempo, setTipoTempo] = useState("year");
    const [resultado, setResultado] = useState<string | null>(null);
    const [erro, setErro] = useState<string | null>(null);
    const [loading, setLoading] = useState(false); // ✅ novo estado

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setResultado(null);
      setErro(null);
      setLoading(true); // inicia loading

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
      } finally {
        setLoading(false); // termina loading
      }
    };

    return (
      <S.hero>
        <div style={{ display: "flex", width: "100%", height: "100vh" }}>
          <Container
            maxWidth="lg"
            sx={{ paddingTop: "8rem", display: "flex", justifyContent: "center", flexDirection: "column",  alignItems: "center", height: "100%" }}
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

              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ alignSelf: "center" }}
                disabled={loading} // desabilita botão enquanto carrega
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Enviar"}
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

            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
                borderRadius: "8px",
                width: "100%",
                maxWidth: "728px"
              }}
            >
              <GoogleAd 
                adClient="ca-pub-3234169519990669" 
                adSlot="1603266178" 
                style={{ width: "100%", height: "auto" }} 
              />
            </div>
          </Container>

          
          
        </div>
      </S.hero>
    );
  };
