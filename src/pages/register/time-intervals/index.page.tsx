import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from "@ignite-ui/react";
import { Container, Header } from "../styles";
import {
  IntervalBox,
  IntervalContentBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
} from "./styles";
import { ArrowRight } from "phosphor-react";

const days = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexa-feira",
  "Sábado",
  "Domingo",
];

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form">
        <IntervalContentBox>
          {days.map((day, i) => (
            <IntervalItem>
              <IntervalDay>
                <Checkbox />
                <Text>{day}</Text>
              </IntervalDay>
              <IntervalInputs>
                <TextInput size="sm" type="time" step={60} />
                <TextInput size="sm" type="time" step={60} />
              </IntervalInputs>
            </IntervalItem>
          ))}
        </IntervalContentBox>
        <Button>
          Próximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  );
}
