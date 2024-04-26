import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function RecentPost(){
    return(
        <Section2 isFancy = {true}>
            <Heading>Posting Terbaru</Heading>
            <Post
                title="Khafillah Akbar Syahputra"
                body="2141720152"
            />
            <Post
                title="Bismillahirahmanirahim"
                body="Saya menyukainya"
            />

        </Section2>
    )
}