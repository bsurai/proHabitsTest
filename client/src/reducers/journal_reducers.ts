interface JournalState {

};

interface JournalAction {
    type: string;
};

const defaultHomeState: JournalState = {};

export default (prevState: JournalState = defaultHomeState, action: JournalAction): JournalState => {
    switch (action.type) {
        default:
            return prevState;
    }
};