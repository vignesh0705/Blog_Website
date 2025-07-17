import BlogList from "@/component/blog"

const About=async()=>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>
            <BlogList />
        </div>
    )
}

export default About;