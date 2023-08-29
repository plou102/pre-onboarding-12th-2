import { defaultInstance } from './util.js';

const requestGet = async (path, instance) => {
  return await instance.get(path).then(res => {
    return res.data;
  });
};

export function getIssues() {
  return requestGet('/repos/facebook/react/issues?sort=comments', defaultInstance);
}

export function getIssuesDetail(id) {
  return requestGet(`/repos/facebook/react/issues/${id}`, defaultInstance);
}
