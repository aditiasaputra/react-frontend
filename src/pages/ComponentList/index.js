import React from 'react';
import { Alert, LinkBadge, Card, Gap, Button, Checkbox, Input, Link, Jumbotron } from "../../components";
import './component-list.scss'

const ComponentList = () => {
    const tagData = {
        tag1: "photography",
        tag2: "travel",
        tag3: "winter",
    };
    return (
    <>
        <div className="container mx-auto px-10">
            <Button title={"Click me!"} color={"yellow"} type={"button"} />
            <Gap height={10} />
            <Checkbox title={"tes"} />
            <Gap height={10} />
            <Input label={"Tes"} placeholder="Tes 123.." type="text" autoFocus />
            <Gap height={10} />
            <Link title={"Test 123"} path={"/tes123"} />

            <Gap height={10} />
            <Alert
            title="Success!"
            message="Data has been inserted!"
            color="green"
            />
            <Gap height={10} />
            <LinkBadge
            color="purple"
            textColor="text-white"
            link={true}
            path="/tes"
            />
            <Gap height={10} />
            <LinkBadge color="red" textColor="text-white" link={false} />
            <Gap height={10} />
            <Jumbotron />
            <Gap height={10} />
            <Card
            title={"Hello world"}
            content={"lorem ipsum domor"}
            tags={tagData}
            />
        </div>
    </>
    );
}

export default ComponentList;