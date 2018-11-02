import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: props.statesArray
        };
        this.handleChange = this.handleChange.bind(this)
      }

      componentWillMount() {
        this.setState ({
            posts: this.props.statesArray,
            loading: false
        });
      }

    handleChange () {
        const { question, statesArray } = this.props;

        let index;

        //check question tocId within states
        //check if exists more than once and keep indexes in an Array (indexes)
        let indexes = statesArray.reduce(function(a, e, i) {
            if (e === question.tocId)
                a.push(i);
            return a;
        }, []);

        indexes.length > 0
        ?
            (
                indexes.map((idx) =>  {
                    //get the index that has changed after the first item is being removed from array
                    index = statesArray.indexOf(question.tocId)
                    statesArray.splice(index, 1)
                })
            )
        :
            statesArray.push(question.tocId);

        this.setState ({
            posts: statesArray
        })
    };

    render() {
        const { classes, question } = this.props;

        return (
            <ExpansionPanel
                expanded={this.state.posts.includes(question.tocId)}
                onChange={() => this.handleChange()}
            >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <span style={{fontWeight: 'bold'}}>Q:</span>
                    <Typography className={classes.heading}
                        dangerouslySetInnerHTML={{__html: question.question}}
                    ></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <ExpansionPanelSummary>
                    <span style={{fontWeight: 'bold'}}>A:</span>
                    <Typography className={classes.heading}
                        dangerouslySetInnerHTML={{__html: question.answer}}
                    ></Typography>
                </ExpansionPanelSummary>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default Question;