import { PAYMENT_METHODS, STATUSES } from "../utils/constants";

const { CARD, CASH, INVOICE } = PAYMENT_METHODS;
const { NEW, PROCESSING, DELIVERED, REJECTED } = STATUSES;

const mockedData = [
  {
    orderNumber: 1,
    createdDate: new Date("2023-01-01"),
    deliveredDate: "",
    paymentMethod: CARD,
    customerName: "Ivan Ivanov",
    orderAmount: "$100.00",
    hasInvoice: true,
    isPaid: true,
    isNewCustomer: false,
    status: NEW,
  },
  {
    orderNumber: 2,
    createdDate: new Date("2023-02-10"),
    deliveredDate: new Date("2023-02-17"),
    paymentMethod: CASH,
    customerName: "Maria Georgieva",
    orderAmount: "$150.00",
    hasInvoice: false,
    isPaid: false,
    isNewCustomer: true,
    status: DELIVERED,
  },
  {
    orderNumber: 3,
    createdDate: new Date("2023-03-20"),
    deliveredDate: new Date("2023-03-27"),
    paymentMethod: INVOICE,
    customerName: "Stefan Dimitrov",
    orderAmount: "$80.00",
    hasInvoice: true,
    isPaid: false,
    isNewCustomer: true,
    status: REJECTED,
  },
  {
    orderNumber: 4,
    createdDate: new Date("2023-04-05"),
    deliveredDate: "",
    paymentMethod: CARD,
    customerName: "Elena Petrova",
    orderAmount: "$120.00",
    hasInvoice: false,
    isPaid: true,
    isNewCustomer: false,
    status: NEW,
  },
  {
    orderNumber: 5,
    createdDate: new Date("2023-05-15"),
    deliveredDate: new Date("2023-05-22"),
    paymentMethod: CASH,
    customerName: "Nikolay Ivanov",
    orderAmount: "$90.00",
    hasInvoice: true,
    isPaid: false,
    isNewCustomer: true,
    status: PROCESSING,
  },
  {
    orderNumber: 6,
    createdDate: new Date("2023-06-25"),
    deliveredDate: new Date("2023-07-02"),
    paymentMethod: INVOICE,
    customerName: "Petia Marinova",
    orderAmount: "$110.00",
    hasInvoice: false,
    isPaid: true,
    isNewCustomer: false,
    status: REJECTED,
  },
  {
    orderNumber: 7,
    createdDate: new Date("2023-07-10"),
    deliveredDate: new Date("2023-07-17"),
    paymentMethod: CARD,
    customerName: "Georgi Georgiev",
    orderAmount: "$40.00",
    hasInvoice: false,
    isPaid: true,
    isNewCustomer: false,
    status: PROCESSING,
  },
  {
    orderNumber: 8,
    createdDate: new Date("2023-08-20"),
    deliveredDate: "",
    paymentMethod: CASH,
    customerName: "Maria Petrova",
    orderAmount: "$75.00",
    hasInvoice: true,
    isPaid: false,
    isNewCustomer: true,
    status: NEW,
  },
  {
    orderNumber: 9,
    createdDate: new Date("2023-09-05"),
    deliveredDate: new Date("2023-09-12"),
    paymentMethod: INVOICE,
    customerName: "Ivan Dimitrov",
    orderAmount: "$120.00",
    hasInvoice: true,
    isPaid: true,
    isNewCustomer: false,
    status: REJECTED,
  },
  {
    orderNumber: 10,
    createdDate: new Date("2023-10-15"),
    deliveredDate: new Date("2023-10-22"),
    paymentMethod: CARD,
    customerName: "Elena Ivanova",
    orderAmount: "$55.00",
    hasInvoice: false,
    isPaid: false,
    isNewCustomer: true,
    status: DELIVERED,
  },
  {
    orderNumber: 11,
    createdDate: new Date("2023-11-25"),
    deliveredDate: new Date("2023-12-02"),
    paymentMethod: CASH,
    customerName: "Ivan Ivanov",
    orderAmount: "$95.00",
    hasInvoice: true,
    isPaid: true,
    isNewCustomer: false,
    status: PROCESSING,
  },
  {
    orderNumber: 12,
    createdDate: new Date("2023-01-05"),
    deliveredDate: new Date("2023-01-12"),
    paymentMethod: INVOICE,
    customerName: "Maria Dimitrova",
    orderAmount: "$80.00",
    hasInvoice: false,
    isPaid: false,
    isNewCustomer: true,
    status: DELIVERED,
  },
  {
    orderNumber: 13,
    createdDate: new Date("2023-02-15"),
    deliveredDate: new Date("2023-02-22"),
    paymentMethod: CARD,
    customerName: "Nikolay Ivanov",
    orderAmount: "$130.00",
    hasInvoice: true,
    isPaid: false,
    isNewCustomer: false,
    status: DELIVERED,
  },
  {
    orderNumber: 14,
    createdDate: new Date("2023-03-25"),
    deliveredDate: new Date("2023-04-01"),
    paymentMethod: CASH,
    customerName: "Elena Petrova",
    orderAmount: "$70.00",
    hasInvoice: false,
    isPaid: true,
    isNewCustomer: true,
    status: REJECTED,
  },
  {
    orderNumber: 15,
    createdDate: new Date("2023-04-10"),
    deliveredDate: new Date("2023-04-17"),
    paymentMethod: INVOICE,
    customerName: "Lili Ivanova",
    orderAmount: "$110.00",
    hasInvoice: true,
    isPaid: true,
    isNewCustomer: false,
    status: REJECTED,
  },
  {
    orderNumber: 16,
    createdDate: new Date("2023-05-20"),
    deliveredDate: new Date("2023-05-27"),
    paymentMethod: CARD,
    customerName: "Lucas Taylor",
    orderAmount: "$85.00",
    hasInvoice: false,
    isPaid: false,
    isNewCustomer: true,
    status: PROCESSING,
  },
  {
    orderNumber: 17,
    createdDate: new Date("2023-06-30"),
    deliveredDate: "",
    paymentMethod: CASH,
    customerName: "Aria Smith",
    orderAmount: "$100.00",
    hasInvoice: true,
    isPaid: false,
    isNewCustomer: false,
    status: NEW,
  },
  {
    orderNumber: 18,
    createdDate: new Date("2023-08-10"),
    deliveredDate: new Date("2023-08-17"),
    paymentMethod: INVOICE,
    customerName: "Ethan Miller",
    orderAmount: "$60.00",
    hasInvoice: false,
    isPaid: true,
    isNewCustomer: true,
    status: PROCESSING,
  },
  {
    orderNumber: 19,
    createdDate: new Date("2023-09-20"),
    deliveredDate: new Date("2023-09-27"),
    paymentMethod: CARD,
    customerName: "Grace Davis",
    orderAmount: "$90.00",
    hasInvoice: true,
    isPaid: false,
    isNewCustomer: true,
    status: DELIVERED,
  },
  {
    orderNumber: 20,
    createdDate: new Date("2023-10-05"),
    deliveredDate: new Date("2023-10-12"),
    paymentMethod: CASH,
    customerName: "Caleb Wilson",
    orderAmount: "$75.00",
    hasInvoice: false,
    isPaid: true,
    isNewCustomer: false,
    status: DELIVERED,
  },
  {
    orderNumber: 21,
    createdDate: new Date("2023-11-15"),
    deliveredDate: new Date("2023-11-22"),
    paymentMethod: INVOICE,
    customerName: "Zoe Taylor",
    orderAmount: "$110.00",
    hasInvoice: true,
    isPaid: true,
    isNewCustomer: false,
    status: DELIVERED,
  },
  {
    orderNumber: 22,
    createdDate: new Date("2022-12-25"),
    deliveredDate: new Date("2023-01-04"),
    paymentMethod: CARD,
    customerName: "Daniel Smith",
    orderAmount: "$50.00",
    hasInvoice: false,
    isPaid: false,
    isNewCustomer: true,
    status: DELIVERED,
  },
  {
    orderNumber: 23,
    createdDate: new Date("2023-02-05"),
    deliveredDate: new Date("2023-02-12"),
    paymentMethod: CASH,
    customerName: "Leah Miller",
    orderAmount: "$120.00",
    hasInvoice: true,
    isPaid: true,
    isNewCustomer: false,
    status: PROCESSING,
  },
  {
    orderNumber: 24,
    createdDate: new Date("2023-03-20"),
    deliveredDate: "",
    paymentMethod: INVOICE,
    customerName: "Henry Brown",
    orderAmount: "$80.00",
    hasInvoice: false,
    isPaid: false,
    isNewCustomer: true,
    status: NEW,
  },
  {
    orderNumber: 25,
    createdDate: new Date("2023-04-05"),
    deliveredDate: "",
    paymentMethod: CARD,
    customerName: "Penelope Wilson",
    orderAmount: "$100.00",
    hasInvoice: true,
    isPaid: true,
    isNewCustomer: false,
    status: NEW,
  },
  {
    orderNumber: 26,
    createdDate: new Date("2023-05-15"),
    deliveredDate: new Date("2023-05-22"),
    paymentMethod: CASH,
    customerName: "Nathan Davis",
    orderAmount: "$65.00",
    hasInvoice: false,
    isPaid: false,
    isNewCustomer: true,
    status: DELIVERED,
  },
];

export { mockedData };
