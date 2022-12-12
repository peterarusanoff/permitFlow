import { Card, Group, Text, Button, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const ReUseableCard = ({
    img,
    text,
    buttonText,
    destination,
}: {
    img: string;
    text: string;
    buttonText: string;
    destination: string;
}) => {
    const navigate = useNavigate();
    return (
        <Group align="center" position="center">
            <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                    <Image src={img} height={160} alt={text} />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{text}</Text>
                </Group>

                <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    onClick={() => {
                        navigate(destination);
                    }}
                >
                    {buttonText}
                </Button>
            </Card>
        </Group>
    );
};

export default ReUseableCard;
