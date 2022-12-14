const data = [
    {
        'active': "active",
        'id': 'tabs1',
        'courses': [
            {
            'courseImg': 'https://res.cloudinary.com/dziy1glm5/image/upload/v1660330289/WhatsApp_Image_2022-08-10_at_2.26.15_PM_p5mc9c.jpg',
            'authorImg': 'assets/images/author/author-00.jpeg',
            'authorName': 'David Nwokediri',
            'courseType': 'Chemistry',
            'courseTitle': 'General Chemistry I',
            'courseDuration': 'CHM 130.1',
            'courseLectures': '+ Past Questions',
            'coursePrice': '₦2,000.00',
            'oldPrice': '',
            'rating': '4.9'
        },
        {
            'courseImg': 'https://res.cloudinary.com/dziy1glm5/image/upload/v1660330288/WhatsApp_Image_2022-08-05_at_7.30.28_PM_exql6l.jpg',
            'authorImg': 'assets/images/author/author-00.jpeg',
            'authorName': 'David Nwokediri',
            'courseType': 'Chemistry',
            'courseTitle': 'General Chemistry II',
            'courseDuration': 'CHM 131.2',
            'courseLectures': '+ Past Questions',
            'coursePrice': '₦2,000.00',
            'oldPrice': '',
            'rating': '4.9'
        },
        {
            'courseImg': 'https://res.cloudinary.com/dziy1glm5/image/upload/v1660330289/WhatsApp_Image_2022-08-10_at_2.29.16_PM_dxpg75.jpg',
            'authorImg': 'assets/images/author/author-00.jpeg',
            'authorName': 'David Nwokediri',
            'courseType': 'Chemistry',
            'courseTitle': 'Organic Chemistry I',
            'courseDuration': 'CHM 132.2',
            'courseLectures': '+ Past Questions',
            'coursePrice': '₦2,000.00',
            'oldPrice': '',
            'rating': '4.9'
        },
        {
            'courseImg': 'https://res.cloudinary.com/dziy1glm5/image/upload/v1660330288/WhatsApp_Image_2022-08-10_at_4.41.23_PM_tuqe0y.jpg',
            'authorImg': 'assets/images/author/author-00.jpeg',
            'authorName': 'David Nwokediri',
            'courseType': 'Chemistry',
            'courseTitle': 'Physical Chemistry',
            'courseDuration': 'CHM 240.2',
            'courseLectures': '+ Past Questions',
            'coursePrice': '₦2,000.00',
            'oldPrice': '',
            'rating': '4.9'
        },
        {
            'courseImg': 'assets/images/courses/courses-07.jpg',
            'authorImg': 'assets/images/author/author-00.jpeg',
            'authorName': 'David Nwokediri',
            'courseType': 'Chemistry',
            'courseTitle': 'Chemistry of Difunctional Compound',
            'courseDuration': 'CHM 261',
            'courseLectures': '+ Past Questions',
            'coursePrice': '₦2,000.00',
            'oldPrice': '',
            'rating': '4.9'
        },
            {
            'courseImg': 'https://res.cloudinary.com/dziy1glm5/image/upload/v1660330224/update_1-1_bpg3hb.png',
            'authorImg': 'assets/images/author/author-00.jpeg',
            'authorName': 'David Nwokediri',
            'courseType': 'Chemistry',
            'courseTitle': 'Process Chemistry I',
            'courseDuration': 'ICH 236.2',
            'courseLectures': '+ Past Questions',
            'coursePrice': '₦2000.00',
            'oldPrice': '',
            'rating': '4.9'
        },
        {
            'courseImg': 'https://res.cloudinary.com/dziy1glm5/image/upload/v1660333174/WhatsApp_Image_2022-08-12_at_8.36.22_PM_etpju4.jpg',
            'authorImg': 'assets/images/author/author-00.jpeg',
            'authorName': 'David Nwokediri',
            'courseType': 'Chemistry',
            'courseTitle': 'Organic Chemistry II',
            'courseDuration': 'CHM 260.2',
            'courseLectures': '+ Past Questions',
            'coursePrice': '₦2,000.00',
            'oldPrice': '',
            'rating': '4.9'
        },
        {
            'courseImg': 'https://res.cloudinary.com/dziy1glm5/image/upload/v1660330289/WhatsApp_Image_2022-08-12_at_1.56.43_PM_wctyvl.jpg',
            'authorImg': 'assets/images/author/author-00.jpeg',
            'authorName': 'David Nwokediri',
            'courseType': 'Chemistry',
            'courseTitle': 'Inorganic Chemistry I',
            'courseDuration': 'CHM 250.1',
            'courseLectures': '+ Past Questions',
            'coursePrice': '₦2,000.00',
            'oldPrice': '',
            'rating': '4.9'
        },
        {
            'courseImg': 'https://res.cloudinary.com/dziy1glm5/image/upload/v1660330229/UPDATE_2-1_lne8i3.png',
            'authorImg': 'assets/images/author/author-00.jpeg',
            'authorName': 'David Nwokediri',
            'courseType': 'Chemistry',
            'courseTitle': 'General Biochemistry I',
            'courseDuration': 'BCH 210',
            'courseLectures': '+ Past Questions',
            'coursePrice': '₦2,000.00',
            'oldPrice': '',
            'rating': '4.9'
        },
            {
            'courseImg': 'https://res.cloudinary.com/dziy1glm5/image/upload/v1660330239/UPDATE_3-1_ytffof.png',
            'authorImg': 'assets/images/author/author-00.jpeg',
            'authorName': 'David Nwokediri',
            'courseType': 'Chemistry',
            'courseTitle': 'General Biochemistry II',
            'courseDuration': 'BCH 214',
            'courseLectures': '+ Past Questions',
            'coursePrice': '₦2000.00',
            'oldPrice': '',
            'rating': '4.9'
        },
            {
            'courseImg': 'https://res.cloudinary.com/dziy1glm5/image/upload/v1660330248/UPDATE_3.111-1_may5pe.png',
            'authorImg': 'assets/images/author/author-00.jpeg',
            'authorName': 'David Nwokediri',
            'courseType': 'Chemistry',
            'courseTitle': 'Analytical Chemistry I',
            'courseDuration': 'CHM 235.1',
            'courseLectures': '+ Past Questions',
            'coursePrice': '₦2000.00',
            'oldPrice': '',
            'rating': '4.9'
        },
            {
            'courseImg': 'https://res.cloudinary.com/dziy1glm5/image/upload/v1660330289/WhatsApp_Image_2022-08-12_at_1.56.52_PM_arzdyf.jpg',
            'authorImg': 'assets/images/author/author-00.jpeg',
            'authorName': 'David Nwokediri',
            'courseType': 'Chemistry',
            'courseTitle': 'Reaction Meachanism 1',
            'courseDuration': 'CHM 365.1',
            'courseLectures': '+ Past Questions',
            'coursePrice': '₦2000.00',
            'oldPrice': '',
            'rating': '4.9'
        },
    ]
    },
    {
        'active': "",
        'id': 'tabs',
        'courses': [
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
    ]
    },
    {
        'active': "",
        'id': 'tabs',
        'courses': [
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
    ]
    },
    {
        'active': "",
        'id': 'tabs',
        'courses': [
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
    ]
    },
    {
        'active': "",
        'id': 'tabs',
        'courses': [
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
    ]
    },
    {
        'active': "",
        'id': 'tabs',
        'courses': [
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
    ]
    },
    {
        'active': "",
        'id': 'tabs',
        'courses': [
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
            {
            'courseImg': 'assets/images/courses/courses-0.jpg',
            'authorImg': 'assets/images/author/author-0.jpg',
            'authorName': '',
            'courseType': '',
            'courseTitle': '',
            'courseDuration': '',
            'courseLectures': '',
            'coursePrice': '',
            'oldPrice': '',
            'rating': ''
        },
    ]
    },
];



export default data