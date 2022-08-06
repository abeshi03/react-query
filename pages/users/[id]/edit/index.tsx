import {useMutateUser, useQueryUser} from "../../../../src/apis/hooks/useUser";
import {useRouter} from "next/router";
import {InputField} from "../../../../src/components/InputField";
import {SubmitHandler, useForm} from "react-hook-form";
import {UserRole} from "../../../../src/types/User";

export type UserInputValues = {
  name: string;
  email: string;
  role: UserRole;
  description: string;
  avatarUri?: string | null;
}


const UserEditPage = () => {

  const router = useRouter();
  const userId = parseInt(router.query.id as string, 10);
  const { data: user, error, isLoading } = useQueryUser(userId)
  const { updateUser } = useMutateUser()

  const { register, handleSubmit } = useForm<UserInputValues>();

  const update: SubmitHandler<UserInputValues> = async (inputValue): Promise<void> => {
    try {
      updateUser.mutate({
        id: userId,
        description: inputValue.description,
        role: inputValue.role ?? "ADMIN",
        email: inputValue.email,
        name: inputValue.name,
        avatarUri: undefined
      })
      await router.push(`/users/${userId}`)
    } catch (error: unknown) {
      console.log(error)
    }
  }

  if (isLoading) return <p>...loading</p>
  if (error) return <p>error</p>

  return (
    <form onSubmit={handleSubmit(update)}>
      <InputField
        type="text"
        label="ユーザー名"
        placeholder="ユーザー名を入力してください"
        defaultValue={user.name}
        required={true}
        inputProps={register("name")}
      />

      <InputField
        type="email"
        label="メールアドレス"
        placeholder="メールアドレスを入力してください"
        defaultValue={user.email}
        required={true}
        inputProps={register("email")}
      />

      <InputField
        type="email"
        label="メールアドレス"
        placeholder="メールアドレスを入力してください"
        defaultValue={user.email}
        required={true}
        inputProps={register("email")}
      />

      <InputField
        type="text"
        label="説明文"
        placeholder="説明文を入力してください"
        defaultValue={user.description}
        required={true}
        inputProps={register("description")}
      />
      <button type="submit">更新</button>
    </form>
  )
}

export default UserEditPage;
