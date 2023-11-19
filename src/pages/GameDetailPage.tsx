import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { Heading,Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";

const GameDetailPage = () => {

    const {slug} = useParams();
    const {data:game,isLoading,error} = useGame(slug!);

    if(isLoading) return <Spinner/>

    if(error || !game) throw error;
    
  return (
  <>
    <Heading>{game.slug}</Heading>
    <ExpandableText children={game.description_raw}></ExpandableText>
    <GameAttribute game={game}/>
  </>
  )
}

export default GameDetailPage