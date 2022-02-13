import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import { Form } from "../../components/";

const availableForm = ["maths", "i2d", "physique"];

export default function FormHandler() {
 const router = useRouter();
 const { form } = router.query;

 if (availableForm.indexOf(form) > -1) {
  return <Form text={form} />;
 } else return <DefaultErrorPage statusCode={404} />;
}
