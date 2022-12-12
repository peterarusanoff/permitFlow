import { Card, Group, Text, Button, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReUseableCard from './Card';
const Indoor = () => {
    const indoorConstructionTypes = [
        {
            img: 'https://i1.wp.com/2020ph.com/wp-content/uploads/2020/06/40410032_288839551709732_6279019647316525056_n.jpg',
            text: 'New bathroom construction',
            buttonText: 'New bathroom',
            destination: '/construction?type=newBathroom&OTC=1&plans=1',
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQ2nbw_NJiWd_6Olhstl7aoWEAkbw94kt_w&usqp=CAU',
            text: 'Bathroom Remodel',
            buttonText: 'Remodel',
            destination: '/construction?type=bathroomRemodel&OTC=1&plans=0',
        },
        {
            img: 'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2021/12/featured-image-laundry-room.jpeg.jpg',
            text: 'New laundry room',
            buttonText: 'New laundry room',
            destination: '/construction?type=newLaundryRoom&OTC=1&plans=1',
        },
        {
            img: 'https://demo.kaliumtheme.com/construction/wp-content/uploads/2017/10/projects-interior-2.jpg',
            text: 'General Construction',
            buttonText: 'View',
            destination: '/construction?type=GeneralIndoorConstruction&IHR=1',
        },
    ];
    const Cards = indoorConstructionTypes.map(indoorConstructionType => {
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

export default Indoor;
