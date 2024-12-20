import { useGetPostsQuery } from "./features/api/baseApi"



function App() {
   const {data,isLoading} = useGetPostsQuery()
   if(isLoading){
    return <h1>Loading...</h1>
   }

  return (
    <>
    <h1 className="text-center text-2xl">Fake data using API getPOST</h1>
     {
      data?.map((post)=><div key={post.id} className="border rounded-md p-2 m-4">{post.title}</div>)
     }
    </>
  )
}

export default App
