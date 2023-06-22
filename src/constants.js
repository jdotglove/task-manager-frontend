export const {
    REACT_APP_TASK_MANAGER_API_URL
} = process.env;

export const SORT_DIRECTIONS = {
    ASC_SORT: 'asc',
    DSC_SORT: 'dsc',
};

export const TASK_STATUSES = [{
  id: 1,
  value: 'Todo',
}, {
  id: 2,
  value: 'In Progress',
}, {
  id: 3,
  value: 'Completed',
}];