import CreateBlogPage from '@/component/create'

const Create=async()=>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>
            <CreateBlogPage />
        </div>
    )
}

export default Create