import { Button, Heading, MultiStep, Text } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { ArrowRight } from "phosphor-react";
import { useRouter } from "next/router";
import { ConnectBox, ConnectBoxContent } from "./styles";

export default function Register() {
  const router = useRouter();

  async function handleConnectCalendar() {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectBoxContent>
          <Text>Google Calendar</Text>

          <Button type="submit" variant="secondary">
            Conectar
            <ArrowRight />
          </Button>
        </ConnectBoxContent>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
}
