import Advice from "../components/home/advice";
import Book from "../components/home/book";
import Client from "../components/home/client";
import Destination from "../components/home/destination";
import Discover from "../components/home/discover";
import Filter from "../components/home/filter";
import Find from "../components/home/find";
import Tour from "../components/home/tour";
import User from "../components/home/user";

const Home = () => {
  return (
    <>
      <Filter />
      <Discover/>
      <Find/>
      <Tour/>
      <User/>
      <Destination/>
      <Client/>
      <Book/>
      <Advice/>
    </>
  );
};

export default Home;
