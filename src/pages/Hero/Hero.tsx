import { Button, Container } from "@mui/material"
import * as S from "./style"
import { useState } from "react";

export const Hero: React.FC = () => {
  const [taxa, setTaxa] = useState("");
  const [tempo, setTempo] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // previne reload da página

    // Cria o objeto que será enviado
    const data = {
      equivalentRate: Number(taxa),  // converte para número
      periodsPerYear: Number(tempo)
    };

    // Exemplo usando fetch para enviar POST
    fetch("http://localhost:8080/api/rates/convert/equivalent-to-nominal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(responseData => {
        console.log("Resposta do servidor:", responseData);
        // Aqui você pode tratar a resposta, mostrar mensagem, etc
      })
      .catch(err => {
        console.error("Erro na requisição:", err);
      });
  };

  return (
    <>
      <S.hero>
        <Container maxWidth="lg">
          <S.formConverter onSubmit={handleSubmit}>
            <S.labelConverter htmlFor="taxa">Taxa</S.labelConverter>
            <S.inputConverter
              placeholder="taxa"
              id="taxa"
              value={taxa}
              onChange={e => setTaxa(e.target.value)}
            />

            <S.labelConverter htmlFor="tempo">Tempo</S.labelConverter>
            <S.inputConverter
              placeholder="tempo"
              id="tempo"
              value={tempo}
              onChange={e => setTempo(e.target.value)}
            />

            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </S.formConverter>
        </Container>
      </S.hero>
    </>
  );
};
