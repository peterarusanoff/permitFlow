
import { Card, Group, Text, Button, Image} from '@mantine/core';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ReUseableCard from './Card';

const Home = () => {
    const navigate = useNavigate();
    const pages = [
        {
            img: "https://demo.kaliumtheme.com/construction/wp-content/uploads/2017/10/projects-interior-2.jpg",
            text: "Interior work",
            buttonText: "Interior work",
            destination: "/indoor"
        },
        {
            img: "https://lirp.cdn-website.com/335d850fc77843248443f93cce2c0b75/dms3rep/multi/opt/Deck-Installation-396w.jpg",
            text: "Exterior Work",
            buttonText: "Exterior Work",
            destination: "/outdoor"
        },
    ];
    const Cards = pages.map((indoorConstructionType) => {
        return (
            <ReUseableCard
                key={indoorConstructionType.text}
                img={indoorConstructionType.img}
                text={indoorConstructionType.text}
                buttonText={indoorConstructionType.buttonText}
                destination={indoorConstructionType.destination}
            />
        )
    });
    return (
        <Group align="center" position="center">
            {Cards}
        </Group>
    );
};

export default Home;