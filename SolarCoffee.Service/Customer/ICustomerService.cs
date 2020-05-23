using System.Collections.Generic;

namespace SolarCoffee.Service.Customer
{
    public interface ICustomerService
    {
        List<Data.Models.Customer> GetAllCustomers();

        ServiceResponse<Data.Models.Customer> CreateCustomer(Data.Models.Customer customer);

        ServiceResponse<bool> DeleteCustomer(int Id);

        Data.Models.Customer GetById(int id);
    }
}