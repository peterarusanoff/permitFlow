import {
    Button,
    LoadingOverlay,
    NumberInput,
    TextInput,
    Group,
    SegmentedControl,
    Anchor,
    Card,
    Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { FormEvent, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { InHouseReview, OTCReview, PermitRequirements } from './Requirements';

function Construction() {
    const [visible, setVisible] = useState(false);
    const form = useForm({
        initialValues: { name: '', email: '', budget: 0, wetZap: '' },
        validate: {
            name: value => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            budget: value => (value < 500 ? 'Your budget must be at least $500.00 USD' : null),
            wetZap: value => (value === '' ? 'Type of work is required' : null),
        },
    });

    function useQuery() {
        const { search } = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
    }

    const query = useQuery();
    const IHR = query.get('IHR');
    const OTC = query.get('OTC');
    const plans = query.get('plans');

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setVisible(true);
        const { name, email, budget, wetZap } = form.values;
        const response = await axios({
            method: 'post',
            baseURL: `http://localhost:3000/api/submit`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
            data: {
                name,
                email,
                budget,
                wetZap,
            },
        });
        console.log(response);
        // setVisible(false);
    };

    const DisplayElectricalForm = () => {
        if (form.values.wetZap === 'Electrical') {
            return (
                <>
                    <Title order={2}> This Form is Required</Title>
                    <br />
                    <Anchor
                        href="https://sfdbi.org/sites/default/files/migrated/FileCenter/Documents/forms/Inspection_Services/Electrical_Permit_Worksheet_2013.pdf "
                        target="_blank"
                    >
                        Electrical Form
                    </Anchor>
                </>
            );
        }
        if (form.values.wetZap === 'Pluming') {
            return (
                <>
                    <Title order={2}> This Form is Required</Title>
                    <br />
                    <Anchor href="https://sfdbi.org/sites/default/files/Plumbing%20Worksheet.pdf" target="_blank">
                        Pluming form
                    </Anchor>
                </>
            );
        }
        if (form.values.wetZap === 'ENP') {
            return (
                <div>
                    <Title order={2}> These Forms are Required</Title>
                    <Anchor
                        href="https://sfdbi.org/sites/default/files/migrated/FileCenter/Documents/forms/Inspection_Services/Electrical_Permit_Worksheet_2013.pdf "
                        target="_blank"
                    >
                        Electrical Form
                    </Anchor>
                    &emsp;
                    <Anchor href="https://sfdbi.org/sites/default/files/Plumbing%20Worksheet.pdf" target="_blank">
                        Pluming form
                    </Anchor>
                </div>
            );
        }
        return <div></div>;
    };

    return (
        <div>
            <Group align="center" position="center">
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <div style={{ width: 600, position: 'relative' }}>
                        <InHouseReview IHR={IHR} />
                        <OTCReview OTC={OTC} Plans={plans} />
                        <Group position="apart" mt="md" mb="xs">
                            <DisplayElectricalForm />
                        </Group>
                        {visible ? (
                            <PermitRequirements OTC={OTC} Plans={plans} IHR={IHR} />
                        ) : (
                            <>
                                <LoadingOverlay visible={visible} overlayBlur={2} />
                                <form onSubmit={submitForm}>
                                    <SegmentedControl
                                        data={[
                                            { label: 'Electrical Work', value: 'Electrical' },
                                            { label: 'Pluming Work', value: 'Pluming' },
                                            { label: 'Electrical & Pluming Work', value: 'ENP' },
                                            { label: 'None of the above', value: 'NA' },
                                        ]}
                                        {...form.getInputProps('wetZap')}
                                    />
                                    <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
                                    <TextInput
                                        mt="sm"
                                        label="Email"
                                        placeholder="Email"
                                        {...form.getInputProps('email')}
                                    />
                                    <NumberInput
                                        mt="sm"
                                        label="Budget"
                                        placeholder="Budget"
                                        min={500}
                                        {...form.getInputProps('budget')}
                                    />
                                    <Button type="submit" mt="sm">
                                        Submit
                                    </Button>
                                </form>
                            </>
                        )}
                    </div>
                </Card>
            </Group>
        </div>
    );
}

export default Construction;
