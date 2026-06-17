import Title from "../../ui/title";
import BlogImg from "../../assets/img/blog.png";
import Button from "../../ui/button";

const BlogTitle = () => {
  return (
    <section className="container mt-[100px] mb-[100px] flex flex-col justify-center items-center text-center">
      <Title
        title="Blog"
        subtitle="Track your workouts, get better results, and be the best version of you. Less thinking"
        classLink="text-[32px] lg:text-[48px]"
        className="w-[327px] lg:w-[544px]"
      />
      <div className="mt-[80px] flex flex-col justify-center items-center lg:items-start lg:justify-start lg:flex-row  w-[327px] shadow-xl rounded-[20px] h-[619px] lg:w-[1120px] lg:h-[526px] border border-[#E6E8EC] rounded-[20px]">
        <div className="w-[327px] h-[321px] lg:w-[560px] lg:h-[526px] ">
          <img className="w-full h-full rounded-[20px]" src={BlogImg} alt="" />
        </div>
        <div className="lg:p-[98px_80px] flex flex-col items-start text-start">
            <h3 className="text-[#FCFCFD] mt-[30px] lg:mt-0 w-[135px] h-[28px] bg-[#23262F] rounded-[100px] w-[135px] h-[28px] font-bold text-[14px] flex items-center justify-center">Tips and Tricks</h3>
            <h1 className="text-[20px] mt-5 font-semibold text-[#141416] w-[311px] lg:w-[368px] lg:text-[40px] lg:font-bold">Convergent and divergent plate margins</h1>
            <p className="mt-5 text-[#777E90] font-normal text-[14px] w-[295px] lg:w-[368px]">Track your workouts, get better results, and be the best version of you. Less thinking</p>
            <Button btnText="Read more" className="w-[134px] mt-5 h-12 bg-(--green)  text-[#FCFCFD] text-[14px] font-bold"/>
        </div>
      </div>
    </section>
  );
};

export default BlogTitle;
