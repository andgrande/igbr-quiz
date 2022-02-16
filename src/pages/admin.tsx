import { GetServerSideProps } from "next";
import { useAuth } from "../contexts/useAuth";
import { useRouter } from 'next/router';
import { useEffect } from "react";

export default function Admin (a: number) {
    const router = useRouter();
    const { authUser, isLoading } = useAuth();

    useEffect(() => {
        if (!authUser?.uid && !isLoading) router.push('/signin');
    }, [authUser, isLoading]);

    return (<>
        {authUser?.uid && (
            <div>
                Admin page

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem totam assumenda quaerat libero fugit temporibus eaque dolores, rerum incidunt porro. Optio, odit enim? Ad mollitia itaque, fugiat nobis repudiandae provident.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, ab.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus quos dignissimos autem debitis! Illo doloremque aliquid voluptatem a ab repellendus sed tempore voluptas? Dolorem beatae aperiam quia minus doloribus, iste, voluptatem fugiat nisi, autem obcaecati dolores mollitia est. Rerum magnam quia perferendis facilis magni in itaque, quasi beatae. Assumenda quaerat temporibus porro ad aliquid fuga, deleniti ut error exercitationem autem aut possimus natus earum! Voluptates, consectetur, impedit saepe repudiandae quam facere ipsa omnis corrupti blanditiis inventore placeat repellendus ex ullam accusantium natus? Ipsam dolorum animi consequuntur delectus quasi velit aperiam praesentium neque voluptatibus rerum, unde, dolor voluptatem ad commodi dolore pariatur dignissimos adipisci deleniti perferendis at deserunt, vel vitae aspernatur.
            </div>
        )}
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    // COOKIES

    return {
        props: {  }
    }
}