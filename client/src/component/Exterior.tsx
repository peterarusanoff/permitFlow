import { Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReUseableCard from './Card';
const Exterior = () => {
    const outdoorConstructionTypes = [
        {
            img: 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/04/Garage-Door-Replacement-Cost.jpg',
            text: 'Garage door replacement',
            buttonText: 'New Garage door',
            destination: '/construction?type=Garage',
        },
        {
            img: 'https://newtownwindows.ca/wp-content/uploads/2021/09/AdobeStock_205636714-min-scaled.jpeg',
            text: 'Exterior doors',
            buttonText: 'Exterior doors',
            destination: '/construction?type=exteriordoors&OTC=1&plans=1',
        },
        {
            img: 'https://altaroofinginc.com/wp-content/uploads/2021/04/What-to-look-for-in-the-roof-when-you-are-buying-a-home.jpg',
            text: 'Re-roofing',
            buttonText: 'Re-roofing',
            destination: '/construction?type=reroofing&OTC=1&plans=1',
        },
        {
            img: 'https://images.squarespace-cdn.com/content/v1/5be4ac6f266c07e4edd988aa/1558590708123-OI3W670ZY0IRVULYSJPP/fence+building',
            text: 'Fencing less than 6 feet',
            buttonText: 'Fencing',
            destination: '/construction?type=fencing',
        },
        {
            img: 'https://lirp.cdn-website.com/335d850fc77843248443f93cce2c0b75/dms3rep/multi/opt/Deck-Installation-396w.jpg',
            text: 'General Construction',
            buttonText: 'View',
            destination: '/construction?type=general&IHR=1',
        },
    ];
    const Cards = outdoorConstructionTypes.map(indoorConstructionType => {
        return (
            <ReUseableCard
                key={indoorConstructionType.text}
                img={indoorConstructionType.img}
                text={indoorConstructionType.text}
                buttonText={indoorConstructionType.buttonText}
                destination={indoorConstructionType.destination}
            />
        );
    });
    const navigate = useNavigate();
    return (
        <Group align="center" position="center">
            {Cards}
        </Group>
    );
};

export default Exterior;
