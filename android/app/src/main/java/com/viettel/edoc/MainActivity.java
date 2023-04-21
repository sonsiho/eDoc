package com.viettel.edoc;

import com.getcapacitor.BridgeActivity;
import com.epicshaggy.biometric.NativeBiometric;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Initializes the Bridge
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
        // Additional plugins you've installed go here
        // Ex: add(TotallyAwesomePlugin.class);
        add(NativeBiometric.class);
        }});
    }
}
