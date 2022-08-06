import {InputField} from "../../../src/components/InputField";
import {SubmitHandler, useForm} from "react-hook-form";
import {UserInputValues} from "../[id]/edit";
import {useMutateUser} from "../../../src/apis/hooks/useUser";
import {useRouter} from "next/router";

const CreateUserPage = () => {

  const { register, handleSubmit } = useForm<UserInputValues>();

  const router = useRouter()
  const { createUser } = useMutateUser()

  const create: SubmitHandler<UserInputValues> = async (inputValue): Promise<void> => {
    createUser.mutate({
      name: inputValue.name,
      email: inputValue.email,
      role: "ADMIN",
      description: inputValue.description
    }, {
      onSuccess: (userId) => router.push(`/users/${userId}`),
      onError: (error) => console.log(error)
    })
  }

  return (
    <form onSubmit={handleSubmit(create)}>
      <InputField
        type="text"
        label="ユーザー名"
        placeholder="ユーザー名を入力してください"
        required={true}
        inputProps={register("name")}
      />

      <InputField
        type="email"
        label="メールアドレス"
        placeholder="メールアドレスを入力してください"
        required={true}
        inputProps={register("email")}
      />

      <InputField
        type="text"
        label="説明文"
        placeholder="説明文を入力してください"
        required={true}
        inputProps={register("description")}
      />

      <button type="submit">追加</button>
    </form>
  )
}

export default CreateUserPage;
