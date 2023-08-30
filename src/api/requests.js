import { defaultInstance } from './util.js';

const requestGet = async (path, instance) => {
  return await instance.get(path).then(res => {
    return res.data;
  });
};

export function getIssues(page) {
  return requestGet(
    `/repos/facebook/react/issues?sort=comments&page=${page}&per_page=28`,
    defaultInstance,
  );
}

export function getIssuesDetail(id) {
  return requestGet(`/repos/facebook/react/issues/${id}`, defaultInstance);
}
