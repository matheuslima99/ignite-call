import { Button, Text, TextInput } from "@ignite-ui/react";
import { Form, FormAnnotation } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/router";

const ClaimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "O usuário precisa ter no mínimo 3 letras.",
    })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: "O usuário pode ter apenas letras e hifens.",
    })
    .transform((username) => username.toLocaleLowerCase()),
});

type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema>;

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(ClaimUsernameFormSchema),
  });

  const router = useRouter();

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data;

    await router.push(`/register?username=${username}`);
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size={"sm"}
          prefix="cal.com/"
          placeholder="seu-usuario"
          {...register("username")}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>

      <FormAnnotation>
        <Text as="span" size="sm">
          {errors.username
            ? `${errors.username.message}`
            : "Digite o nome de usuário desejado!"}
        </Text>
      </FormAnnotation>
    </>
  );
}
