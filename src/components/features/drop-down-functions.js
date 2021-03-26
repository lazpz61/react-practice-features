import React, {Component} from "react";
import { DropDown } from "./features/drop-down-btn";

const crmData = [
    { employee: "John Daniels", position: "Farmers"},
    { employee: "John John", position: "Bus Driver"},
    { employee: "Nafis Ahmed", position: "Epidemiologist" },
    { employee: "Ahmed Ahmed", position: "Software Developer" }
  ];


export default class crmPositions extends Component {
    constructor(props) {
        super(props);

    this.state = {
        crmPositionData: crmData,
        clicked: true
    };
}

clearEntries = () => {
    this.setState({crmPositionData: [], clicked: true});
};

showPositionEntries = () => {
    this.setState({crmPositionData: crmData, clicked: false});
};
toggleStatus = () => {
    if (this.state.clicked) {
        this.setState({ crmPositionData, clicked: true});
    } else {
        this.setState({ crmPositionData: crmData, clicked: true });
    }
};

render() {
    const crmEmployeeData = this.state.crmPositionData.map(pos => {
        return (
            <div key={pos.employee}>
                <DropDown
                employee={pos.employee}
                role={pos.role}
                />
            </div>
        );
    });
    return (
        <div>
        <h1>CRM Data</h1>
        {crmEmployeeData}
        <button onClick={this.clearEntries}>Clear Crm Data</button>
        <button onClick={this.showPositionEntries}>Show Crm Data</button>
        <button onClick={this.toggleStatus}>Toggle Crm Data</button>
        </div>
        );
    }
}