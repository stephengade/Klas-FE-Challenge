import http from '../../../http-common';


const getAll = () => {
  return http.get("/customers");
};
const get = (id:any) => {
  return http.get(`/customers/${id}`);
};
const create = (data:any) => {
  return http.post("/customers", data);
};
const update = (id:any, data:any) => {
  return http.put(`/customers/${id}`, data);
};
const remove = (id:any) => {
  return http.delete(`/customers/${id}`);
};
const removeAll = () => {
  return http.delete(`/customers`);
};
const findByTitle = (title:string) => {
  return http.get(`/customers?title=${title}`);
};
const CrudService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};
export default CrudService;