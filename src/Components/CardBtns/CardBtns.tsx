import { Paper, Button, Text, Skeleton, Anchor } from "@mantine/core";

export function CardBtns(props: any) {
    const {btn, link} = props;

    return (
        <>
            {
                link ? "" : <br />
            }
            {
                btn ? 
                <Anchor href={btn} target="_blank">
                    <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                    Repo
                    </Button>
                </Anchor>  : <></>
            }
            {
                link ? 
                <Anchor href={link} target="_blank">
                    <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                    Live
                    </Button> 
                </Anchor> : <> <br /> </>
            }
        </>
    )
}