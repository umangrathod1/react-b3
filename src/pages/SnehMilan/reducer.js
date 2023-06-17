import { EDUCATION, INTEREST_CONTRIBUTION, TAB_IDS } from "./constants";
import Pr from 'prop-types';

const getInitialFormValues = () => ({
    id: '',
    name: '',
    phone: '',
    city: '',
    education: '',
    isPinned: false,
    interests: []
});

export const RecordPropType = Pr.shape({
    id: Pr.string,
    name: Pr.string,
    phone: Pr.string,
    city: Pr.string,
    education: Pr.oneOf(EDUCATION.map(obj => obj.value)),
    isPinned: Pr.bool,
    interests: Pr.arrayOf(Pr.string), 
    /*  
        this need to be fixed - this should be array of string,
        but possible values are one of INTEREST_CONTRIBUTION.map(obj => obj.value)
    */
});

const DummyRecords = [
    {
        id: crypto.randomUUID(),
        name: 'Ghanshyam KD',
        phone: '89000 00098',
        city: 'Surat',
        education: EDUCATION[3].value,
        interests: [INTEREST_CONTRIBUTION[1].value, INTEREST_CONTRIBUTION[2].value]
    },
    {
        id: crypto.randomUUID(),
        name: 'Mohan Patel',
        phone: '99880 90908',
        city: 'Surat',
        education: EDUCATION[2].value,
        interests: [INTEREST_CONTRIBUTION[0].value, INTEREST_CONTRIBUTION[3].value]
    },
    {
        id: crypto.randomUUID(),
        name: 'Ajay Patel',
        phone: '98332 00998',
        city: 'Ahmedabad',
        education: EDUCATION[2].value,
        interests: [INTEREST_CONTRIBUTION[0].value]
    },
    {
        id: crypto.randomUUID(),
        name: 'Kunal Jain',
        phone: '90901 00998',
        city: 'Baroda',
        education: EDUCATION[3].value,
        interests: [INTEREST_CONTRIBUTION[0].value]
    },
    ,
    {
        id: crypto.randomUUID(),
        name: 'Pritam Kumar KV',
        phone: '90117 98440',
        city: 'Baroda',
        education: EDUCATION[4].value,
        interests: [INTEREST_CONTRIBUTION[3].value]
    }
]
export const getInitialAppState = () => {
    return ({
        form: getInitialFormValues(),
        records: DummyRecords,
        tabId: TAB_IDS.VIEW_MEMBERS,
    });
};

export const ACTION_TYPES = {
    'ADD_RECORD': 'ADD_RECORD',
    'DELETE_RECORD': 'DELETE_RECORD',
    'PIN_RECORD': 'PIN_RECORD',
    'CHANGE_CURRENT_TAB': 'CHANGE_CURRENT_TAB',
};

export const reducerFn = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_RECORD:
            return {
                ...state,
                records: [...state.records, action.payload],
            };

        case ACTION_TYPES.DELETE_RECORD:
            return {
                ...state,
                records: state.records.filter(obj => obj.id !== action.payload),
            };
        
        case ACTION_TYPES.CHANGE_CURRENT_TAB:
            return {
                ...state,
                tabId: action.payload,
            }
        default:
            break;
    }
}