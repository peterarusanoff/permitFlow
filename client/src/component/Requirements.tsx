import { Timeline, Text, Title, Anchor, Group } from '@mantine/core';
import {
    IconFileSymlink,
    IconCopy,
    IconFileUpload,
    IconMap2,
    IconFileLike,
    IconWallet,
    IconPlayCard,
    IconFlag,
} from '@tabler/icons';

const InHouseReview = ({ IHR }: { IHR: string | null }) => {
    if (IHR === '1') {
        return (
            <div>
                <Title order={2}> In House Review</Title>
                <p> An in-house review process is required</p>
            </div>
        );
    }
    return <div></div>;
};
const OTCReview = ({ OTC, Plans }: { OTC: string | null; Plans: string | null }) => {
    if (OTC === '1' && Plans === '1') {
        return (
            <div>
                <Title order={2}> Over The Counter Review is required</Title>
                <Title order={2}> Plans are required</Title>
            </div>
        );
    }
    if (OTC === '1' && Plans === '0') {
        return (
            <div>
                <Title order={2}> Over The Counter Review is required</Title>
            </div>
        );
    }
    return <div></div>;
};

const PermitRequirements = ({ IHR, OTC, Plans }: { IHR: string | null; OTC: string | null; Plans: string | null }) => {
    if (OTC === '1') {
        return (
            <Group align="center" position="center">
                <Timeline active={6} bulletSize={30} lineWidth={2}>
                    <Timeline.Item
                        bullet={<IconFileSymlink size={16} />}
                        lineVariant={Plans !== '1' ? 'dashed' : 'solid'}
                        title="Prepare your application"
                    >
                        <Text color="dimmed" size="sm">
                            including all necessary forms from above
                        </Text>
                    </Timeline.Item>
                    {Plans === '1' ? (
                        <Timeline.Item bullet={<IconCopy size={16} />} lineVariant="dashed" title="Plans">
                            <Text color="dimmed" size="sm">
                                Plans are required, prepare two copies of each plan set.
                            </Text>
                        </Timeline.Item>
                    ) : (
                        <></>
                    )}

                    <Timeline.Item bullet={<IconMap2 size={16} />} title="San Francisco DBI.">
                        <Text color="dimmed" size="sm">
                            Go through the OTC review process at San Francisco DBI
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item title="Permit review" bullet={<IconFileLike size={16} />}>
                        <Text color="dimmed" size="sm">
                            Get your permit reviewed and Approved
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item title="Pay the permit fees" bullet={<IconWallet size={16} />}>
                        <Text color="dimmed" size="sm">
                            get your approved permit
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item title="job card" bullet={<IconPlayCard size={12} />}>
                        <Text color="dimmed" size="sm">
                            get your job card
                        </Text>
                    </Timeline.Item>
                </Timeline>
            </Group>
        );
    }
    if (IHR === '1') {
        return (
            <Group align="center" position="center">
                <Timeline active={5} bulletSize={30} lineWidth={2}>
                    <Timeline.Item bullet={<IconFileSymlink size={16} />} title="Prepare your application">
                        <Text color="dimmed" size="sm">
                            including all necessary forms from above
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item bullet={<IconFileUpload size={16} />} title="Submit application">
                        <Text color="dimmed" size="sm">
                            {' '}
                            (all forms and plans) for electronic review on SFDBI website.
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item bullet={<IconMap2 size={16} />} title="Track permit approval">
                        <Text color="dimmed" size="sm">
                            Track permit approval status{' '}
                            <Anchor href="https://dbiweb02.sfgov.org/dbipts/" target="_blank">
                                Here
                            </Anchor>
                            .
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item title="Pay the permit fees" bullet={<IconWallet size={16} />}>
                        <Text color="dimmed" size="sm">
                            get your approved permit
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item title="job card" bullet={<IconPlayCard size={16} />}>
                        <Text color="dimmed" size="sm">
                            get your job card
                        </Text>
                    </Timeline.Item>
                </Timeline>
            </Group>
        );
    }
    return (
        <Group align="center" position="center">
            <div>
                <Title order={2}>
                    <IconFlag /> Nothing is required! You’re set to build.
                </Title>
            </div>
        </Group>
    );
};

export { InHouseReview, OTCReview, PermitRequirements };
