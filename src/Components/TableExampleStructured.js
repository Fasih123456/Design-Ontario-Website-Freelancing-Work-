import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const TableExampleStructured = () => (
  <Table celled structured>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan='2' textAlign='center'>Packages</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>
            <h4>Small</h4>
            <br />
            <p><b>SINGLE DECK UP TO 10M2</b></p>
            <p>Convert a sketch/pdf deck plan into 2D</p>
        </Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>
            <h4>Medium</h4>
            <br />
            <p><b>DECK DESIGN UP TO 20M2</b></p>
            <p>Partial Permit Pacakge</p>
        </Table.HeaderCell>
        <Table.HeaderCell colSpan='3'>
            <h4>Large</h4>
            <br />
            <p><b>DECK DESIGN UP TO 20M2</b></p>
            <p>Full Permit Pacakge</p>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>High Level Of Detail</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Graphic Enhacements</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Include Layout Sheets</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>

      </Table.Row>
      <Table.Row>
        <Table.Cell>Include 2D drawings</Table.Cell>
        <Table.Cell textAlign='center'>2</Table.Cell>
        <Table.Cell textAlign='center'>4</Table.Cell>
        <Table.Cell textAlign='center'>6</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Project Size (sq ft)</Table.Cell>
        <Table.Cell textAlign='center'>107</Table.Cell>
        <Table.Cell textAlign='center'>107</Table.Cell>
        <Table.Cell textAlign='center'>215</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Revisions</Table.Cell>
        <Table.Cell textAlign='center'>2</Table.Cell>
        <Table.Cell textAlign='center'>2</Table.Cell>
        <Table.Cell textAlign='center'>4</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Delivery Time</Table.Cell>
        <Table.Cell textAlign='center'>14 days</Table.Cell>
        <Table.Cell textAlign='center'>14 days</Table.Cell>
        <Table.Cell textAlign='center'>14 days</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Total</Table.Cell>
        <Table.Cell textAlign='center'>$150</Table.Cell>
        <Table.Cell textAlign='center'>$200</Table.Cell>
        <Table.Cell textAlign='center'>$300</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleStructured