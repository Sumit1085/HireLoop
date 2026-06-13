import { getCompanyJob } from '@/lib/api/jobs';
import React from 'react';
import { Button, Table } from "@heroui/react";

const RecruiterJobs = async () => {
    const companyId = 'company_123'
    const jobs = await getCompanyJob(companyId)

    console.log(jobs)
    return (
        <div>
            {
                jobs.map(job => <><Table>
                    <Table.ScrollContainer>
                        <Table.Content aria-label="Team members" className="min-w-[600px]">
                            <Table.Header>
                                <Table.Column isRowHeader>Job Title</Table.Column>
                                <Table.Column>Job Type</Table.Column>
                                <Table.Column>Salary</Table.Column>
                                <Table.Column>deadline</Table.Column>
                                <Table.Column>Action</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{job.jobTitle}</Table.Cell>
                                    <Table.Cell>{job.jobCategory}</Table.Cell>
                                    <Table.Cell>{job.minSalary} - {job.maxSalary}</Table.Cell>
                                    <Table.Cell>{new Date(job.deadline).toLocaleDateString()}</Table.Cell>
                                    <Table.Cell><Button variant="tertiary">Apply Now</Button></Table.Cell>
                                </Table.Row>

                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table></>)
            }
        </div>
    );
};

export default RecruiterJobs;