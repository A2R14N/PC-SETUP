// ============================================
// PC SETUP CHECKLIST - CONFIGURATION FILE
// ============================================

const CONFIG = {

    // ----------------------------------------
    // USEFUL LINKS (shown in left sidebar)
    // ----------------------------------------
    links: [
        { name: 'NVIDIA Drivers', url: 'https://www.nvidia.com/en-us/geforce/drivers/', icon: 'nvidia' },
        { name: 'AMD Drivers', url: 'https://www.amd.com/en/support', icon: 'amd' },
        { name: 'Massgrave', url: 'https://massgrave.dev/', icon: 'windows' },
        { name: 'FMHY', url: 'https://fmhy.net/', icon: 'play-fill' },
        { name: 'Revo Uninstaller', url: 'https://www.revouninstaller.com/products/revo-uninstaller-free/', icon: 'trash' },
        { name: 'Asus DriverHub', url: 'https://driverhub.asus.com/en', icon: 'download' },
    ],

    // ----------------------------------------
    // CHECKLIST ITEMS
    // Format: { text: 'Task name', subs: ['sub-task 1', 'sub-task 2'] }
    // For items without sub-tasks, use: { text: 'Task name', subs: [] }
    // ----------------------------------------
    items: [
        {
            text: 'Disable mouse acceleration',
            subs: []
        },
        {
            text: 'Activate Windows',
            subs: []
        },
        {
            text: 'Start settings',
            subs: []
        },
        {
            text: 'Set Date and time settings',
            subs: []
        },
        {
            text: 'Disable Sticky Keys',
            subs: []
        },
        {
            text: 'Disable game mode',
            subs: []
        },
        {
            text: 'Disable system - nearby sharing',
            subs: []
        },
        {
            text: 'File Explorer Options',
            subs: []
        },
        {
            text: 'Windows 11 Old Context Menu',
            subs: [
                { name: 'Old Context Menu', url: 'https://gist.github.com/A2R14N/ee4f345e67b3729613b628d61f43b9c1' }
            ]
        },
        {
            text: 'Install drivers',
            subs: [
                'Motherboard drivers',
                'Graphics driver',
            ]
        },
        {
            text: 'Nvidia Settings',
            subs: [
            ]
        },
        {
            text: 'Configure power plan settings',
            subs: [
            ]
        },
        {
            text: 'Install software',
            subs: [
                { name: 'Chrome', url: 'https://www.google.com/chrome/' },
                { name: 'VLC', url: 'https://www.videolan.org/vlc/' },
                { name: '7-Zip', url: 'https://www.7-zip.org/' },
                { name: 'CPU-Z', url: 'https://www.cpuid.com/softwares/cpu-z.html' },
                { name: 'GPU-Z', url: 'https://www.techpowerup.com/download/techpowerup-gpu-z/' },
                'Office (Optional)'
            ]
        },
        {
            text: 'Browser extensions',
            subs: [
                { name: 'AdGuard AdBlocker', url: 'https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg' },
                { name: 'Dark Reader', url: 'https://chromewebstore.google.com/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh' }
            ]
        },
        {
            text: 'System settings',
            subs: [
                'Disable startup programs',
                'Configure Windows Defender',
                'Set default apps'
            ]
        },
        {
            text: 'Update Windows',
            subs: []
        },
        {
            text: 'Faceit settings (Bios+Antivirus)',
            subs: []
        },
    ]
};

