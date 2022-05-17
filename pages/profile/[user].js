import { useRouter } from 'next/router';
const User = () => {
  const router = useRouter();
  const user = router.query;
  console.log(user);
  return <h2 className='text-3xl'>{user.user}</h2>;
};

export default User;
