import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Form, FormError, Header } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "@/lib/axios";
import { NextSeo } from "next-seo";

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "O usuário precisa ter no mínimo 3 letras." })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: "O usuário pode ter apenas letras e hifens.",
    })
    .transform((username) => username.toLocaleLowerCase()),

  fullname: z
    .string()
    .min(3, { message: "O nome precisa ter no mínimo 3 letras." }),
});

type registerFormData = z.infer<typeof registerFormSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<registerFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const router = useRouter();

  useEffect(() => {
    if (router.query.username) {
      setValue("username", String(router.query.username));
    }
  }, [router.query?.username, setValue]);

  async function handleUserRegister(data: registerFormData) {
    try {
      await api.post("/users", {
        username: data.username,
        fullname: data.fullname,
      });

      router.push("/register/connect-calendar");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <NextSeo title="Crie uma conta | Ignite call" />

      <Container>
        <Header>
          <Heading as="strong">Bem-vindo ao Ignite Call</Heading>
          <Text>
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </Text>

          <MultiStep size={4} currentStep={1} />
        </Header>

        <Form as="form" onSubmit={handleSubmit(handleUserRegister)}>
          <label>
            <Text size="sm">Nome de usuário</Text>
            <TextInput
              prefix="cal.com/"
              placeholder="seu-usuario"
              {...register("username")}
            />

            {errors.username && (
              <FormError size="sm">{errors.username.message}</FormError>
            )}
          </label>

          <label>
            <Text size="sm">Nome completo</Text>
            <TextInput placeholder="Seu nome" {...register("fullname")} />

            {errors.fullname && (
              <FormError size="sm">{errors.fullname.message}</FormError>
            )}
          </label>

          <Button type="submit" disabled={isSubmitting}>
            Próximo passo
            <ArrowRight />
          </Button>
        </Form>
      </Container>
    </>
  );
}
